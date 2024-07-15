import { ImageIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Center, Container, Grid, GridItem, HStack, Stack } from 'styled-system/jsx'
import { PageHeader } from '~/components/page-header'
import { Card, Icon, Text } from '~/components/ui'
// import { findAllCategories } from '~/lib/components'

export default async function Page() {
  // const categories = await findAllCategories()
  const categories = [
    {
      id: 'banner',
      name: 'Banner',
      variants: 3,
    },
  ]

  return (
    <Container py={{ base: '16', md: '24' }}>
      <Stack gap={{ base: '16', md: '24' }}>
        <PageHeader
          heading="Check out a few examples"
          subHeading="Examples"
          description="Get inspired by our examples and use them to kickstart your own projects."
        />
        <Grid gridTemplateColumns={{ base: '1', sm: '2', md: '3' }} gap="8">
          {categories.map((category) => (
            <Link key={category.id} href="#">
              <GridItem>
                <Card.Root boxShadow="sm" overflow="hidden">
                  <Card.Header pt="4" p="4">
                    <Center bg="bg.subtle" h="48" borderRadius="l2">
                      <Icon size="2xl" color="fg.disabled">
                        <ImageIcon />
                      </Icon>
                    </Center>
                  </Card.Header>
                  <Card.Body>
                    <HStack gap="2">
                      <Text size="lg" fontWeight="semibold">
                        {category.name}
                      </Text>
                    </HStack>
                    <Text size="sm" color="fg.muted">
                      {category.variants} variant{category.variants > 1 ? 's' : ''}
                    </Text>
                  </Card.Body>
                </Card.Root>
              </GridItem>
            </Link>
          ))}
        </Grid>
      </Stack>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Examples',
}
