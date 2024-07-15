import { Code2Icon, EyeIcon, FigmaIcon } from 'lucide-react'
import { HStack } from 'styled-system/jsx'
import { Heading, Link, Tabs, Text } from '~/components/ui'
// import type { Category, Component } from '~/lib/components'

interface Props {
  //   component: Component
  component: any
  figmaNodeId: string
  category: any
}

export const Showcase = (props: Props) => {
  const { component, figmaNodeId, category } = props

  const isAvailable = true

  return (
    <Tabs.Root variant="enclosed" defaultValue="preview" size="sm" lazyMount>
      <HStack gap="3">
        <HStack justify="space-between" flex="1">
          <Heading textStyle={{ base: 'md', md: 'lg' }} fontWeight="semibold">
            {component.name}
          </Heading>
          <Tabs.List width="fit-content">
            <Tabs.Trigger value="preview">
              <EyeIcon />
              <Text display={{ base: 'none', md: 'flex' }}>Preview</Text>
            </Tabs.Trigger>
            <Tabs.Trigger value="code" disabled={!isAvailable}>
              <Code2Icon />
              <Text display={{ base: 'none', md: 'flex' }}>Code</Text>
            </Tabs.Trigger>
            <Link
              href={`https://www.figma.com/design/wN70u2btZ6uKVxFJ8UPXvy/Park-UI-Design-System-Pro-Components-(Preview)?node-id=${figmaNodeId}&mode=design`}
              target="_blank"
              textStyle="sm"
              px="3"
              color={isAvailable ? 'fg.muted' : 'fg.disabled'}
              cursor={isAvailable ? 'pointer' : 'not-allowed'}
              textDecoration="none"
              display={{ base: 'none', md: 'flex' }}
            >
              <FigmaIcon />
              <Text>Figma</Text>
            </Link>
            <Tabs.Indicator />
          </Tabs.List>
        </HStack>
      </HStack>
      <Tabs.Content value="preview" px="!0">
        {/* <ComponentPreview componentId={component.id} /> */}
      </Tabs.Content>
      <Tabs.Content value="code" px="!0">
        {/* <ComponentCodePreview componentId={component.id} /> */}
      </Tabs.Content>
    </Tabs.Root>
  )
}
