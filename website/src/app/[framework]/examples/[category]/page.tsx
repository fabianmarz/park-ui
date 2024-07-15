import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Stack } from 'styled-system/jsx'
import { Showcase } from '~/components/examples/showcase'
import { PageHeader } from '~/components/page-header'
// import { type CategoryId, findAllComponentsByCategoryId, findCategoryById } from '~/lib/components'

interface Props {
  params: {
    // category: CategoryId[]
    category: string
  }
}

export default async function Page(props: Props) {
  const { params } = props
  //   const categoryId = params.category[0]
  //   const category = await findCategoryById(categoryId)
  //   const components = await findAllComponentsByCategoryId(categoryId)

  //   if (!category) {
  //     return notFound()
  //   }

  const category = {
    id: 'banner',
    name: 'Banner',
    figmaNodeId: '123',
    description:
      "A banner is a graphic image that announces a sale or promotion. It's a great way to grab the attention of your visitors and make them aware of a special offer.",
  }

  const components = [
    {
      id: 'banner-1',
      name: 'Banner 1',
    },
  ]

  return (
    <Stack gap={{ base: '16', md: '24' }}>
      <PageHeader
        heading={category.name}
        description={category.description}
        subHeading="Examples"
      />
      {components.map((component) => (
        <Showcase
          key={component.id}
          component={component}
          figmaNodeId={category.figmaNodeId}
          category={category}
        />
      ))}
    </Stack>
  )
}

// export async function generateMetadata(props: Props): Promise<Metadata> {
//   const { params } = props
//   const categoryId = params.category[0]
//   const category = await findCategoryById(categoryId)

//   if (!category) {
//     return {}
//   }

//   return {
//     title: category.name,
//     description: category.description,
//   }
// }
