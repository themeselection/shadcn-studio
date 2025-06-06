import type { RegistryItem } from 'shadcn/registry'

export const components: RegistryItem[] = [
  {
    name: 'bounce-button',
    type: 'registry:ui',
    dependencies: ['class-variance-authority', 'motion'],
    registryDependencies: ['button', 'utils'],
    files: [
      {
        path: 'src/registry/new-york/ui/bounce-button.tsx',
        type: 'registry:ui'
      }
    ]
  },
  {
    name: 'magnetic-button',
    type: 'registry:ui',
    dependencies: ['class-variance-authority', 'motion'],
    registryDependencies: ['button', 'utils'],
    files: [
      {
        path: 'src/registry/new-york/ui/magnetic-button.tsx',
        type: 'registry:ui'
      }
    ]
  },
  {
    name: 'motion-checkbox',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-checkbox', 'motion'],
    registryDependencies: ['utils'],
    files: [
      {
        path: 'src/registry/new-york/ui/motion-checkbox.tsx',
        type: 'registry:ui'
      }
    ]
  },
  {
    name: 'motion-radio-group',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-radio-group', 'lucide-react', 'motion'],
    registryDependencies: ['utils'],
    files: [
      {
        path: 'src/registry/new-york/ui/motion-radio-group.tsx',
        type: 'registry:ui'
      }
    ]
  },
  {
    name: 'ripple-button',
    type: 'registry:ui',
    dependencies: ['class-variance-authority', 'motion'],
    registryDependencies: ['button', 'utils'],
    files: [
      {
        path: 'src/registry/new-york/ui/ripple-button.tsx',
        type: 'registry:ui'
      }
    ]
  },
  {
    name: 'shimmer-button',
    type: 'registry:ui',
    dependencies: ['motion'],
    registryDependencies: ['utils'],
    files: [
      {
        path: 'src/registry/new-york/ui/shimmer-button.tsx',
        type: 'registry:ui'
      }
    ]
  },
  {
    name: 'accordion-01',
    type: 'registry:component',
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'src/registry/new-york/components/accordion/accordion-01.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/accordion/accordion-01.tsx'
      }
    ]
  },
  {
    name: 'accordion-02',
    type: 'registry:component',
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'src/registry/new-york/components/accordion/accordion-02.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/accordion/accordion-02.tsx'
      }
    ]
  },
  {
    name: 'accordion-03',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'src/registry/new-york/components/accordion/accordion-03.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/accordion/accordion-03.tsx'
      }
    ]
  },
  {
    name: 'accordion-04',
    type: 'registry:component',
    dependencies: ['@radix-ui/react-accordion', 'lucide-react'],
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'src/registry/new-york/components/accordion/accordion-04.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/accordion/accordion-04.tsx'
      }
    ]
  },
  {
    name: 'accordion-05',
    type: 'registry:component',
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'src/registry/new-york/components/accordion/accordion-05.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/accordion/accordion-05.tsx'
      }
    ]
  },
  {
    name: 'accordion-06',
    type: 'registry:component',
    dependencies: ['@radix-ui/react-accordion', 'lucide-react'],
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'src/registry/new-york/components/accordion/accordion-06.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/accordion/accordion-06.tsx'
      }
    ]
  },
  {
    name: 'accordion-07',
    type: 'registry:component',
    registryDependencies: ['accordion', 'avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/accordion/accordion-07.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/accordion/accordion-07.tsx'
      }
    ]
  },
  {
    name: 'accordion-08',
    type: 'registry:component',
    dependencies: ['@radix-ui/react-accordion', 'lucide-react'],
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'src/registry/new-york/components/accordion/accordion-08.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/accordion/accordion-08.tsx'
      }
    ]
  },
  {
    name: 'accordion-09',
    type: 'registry:component',
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'src/registry/new-york/components/accordion/accordion-09.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/accordion/accordion-09.tsx'
      }
    ]
  },
  {
    name: 'accordion-10',
    type: 'registry:component',
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'src/registry/new-york/components/accordion/accordion-10.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/accordion/accordion-10.tsx'
      }
    ]
  },
  {
    name: 'accordion-11',
    type: 'registry:component',
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'src/registry/new-york/components/accordion/accordion-11.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/accordion/accordion-11.tsx'
      }
    ]
  },
  {
    name: 'accordion-12',
    type: 'registry:component',
    dependencies: ['@radix-ui/react-accordion', 'lucide-react'],
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'src/registry/new-york/components/accordion/accordion-12.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/accordion/accordion-12.tsx'
      }
    ]
  },
  {
    name: 'accordion-13',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'src/registry/new-york/components/accordion/accordion-13.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/accordion/accordion-13.tsx'
      }
    ]
  },
  {
    name: 'accordion-14',
    type: 'registry:component',
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'src/registry/new-york/components/accordion/accordion-14.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/accordion/accordion-14.tsx'
      }
    ]
  },
  {
    name: 'accordion-15',
    type: 'registry:component',
    dependencies: ['@radix-ui/react-accordion', 'lucide-react'],
    registryDependencies: ['accordion', 'collapsible'],
    files: [
      {
        path: 'src/registry/new-york/components/accordion/accordion-15.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/accordion/accordion-15.tsx'
      }
    ]
  },
  {
    name: 'accordion-16',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['accordion', 'collapsible'],
    files: [
      {
        path: 'src/registry/new-york/components/accordion/accordion-16.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/accordion/accordion-16.tsx'
      }
    ]
  },
  {
    name: 'alert-01',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-01.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-01.tsx'
      }
    ]
  },
  {
    name: 'alert-02',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert', 'avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-02.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-02.tsx'
      }
    ]
  },
  {
    name: 'alert-03',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-03.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-03.tsx'
      }
    ]
  },
  {
    name: 'alert-04',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert', 'button'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-04.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-04.tsx'
      }
    ]
  },
  {
    name: 'alert-05',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-05.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-05.tsx'
      }
    ]
  },
  {
    name: 'alert-06',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert', 'avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-06.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-06.tsx'
      }
    ]
  },
  {
    name: 'alert-07',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert', 'button'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-07.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-07.tsx'
      }
    ]
  },
  {
    name: 'alert-08',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert', 'button'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-08.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-08.tsx'
      }
    ]
  },
  {
    name: 'alert-09',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert', 'avatar', 'progress'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-09.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-09.tsx'
      }
    ]
  },
  {
    name: 'alert-10',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert', 'button', 'progress'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-10.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-10.tsx'
      }
    ]
  },
  {
    name: 'alert-11',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-11.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-11.tsx'
      }
    ]
  },
  {
    name: 'alert-12',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-12.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-12.tsx'
      }
    ]
  },
  {
    name: 'alert-13',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert', 'button'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-13.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-13.tsx'
      }
    ]
  },
  {
    name: 'alert-14',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-14.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-14.tsx'
      }
    ]
  },
  {
    name: 'alert-15',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-15.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-15.tsx'
      }
    ]
  },
  {
    name: 'alert-16',
    type: 'registry:component',
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-16.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-16.tsx'
      }
    ]
  },
  {
    name: 'alert-17',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-17.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-17.tsx'
      }
    ]
  },
  {
    name: 'alert-18',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-18.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-18.tsx'
      }
    ]
  },
  {
    name: 'alert-19',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-19.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-19.tsx'
      }
    ]
  },
  {
    name: 'alert-20',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-20.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-20.tsx'
      }
    ]
  },
  {
    name: 'alert-21',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-21.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-21.tsx'
      }
    ]
  },
  {
    name: 'alert-22',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-22.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-22.tsx'
      }
    ]
  },
  {
    name: 'alert-23',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-23.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-23.tsx'
      }
    ]
  },
  {
    name: 'alert-24',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-24.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-24.tsx'
      }
    ]
  },
  {
    name: 'alert-25',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-25.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-25.tsx'
      }
    ]
  },
  {
    name: 'alert-26',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-26.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-26.tsx'
      }
    ]
  },
  {
    name: 'alert-27',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-27.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-27.tsx'
      }
    ]
  },
  {
    name: 'alert-28',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-28.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-28.tsx'
      }
    ]
  },
  {
    name: 'alert-29',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-29.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-29.tsx'
      }
    ]
  },
  {
    name: 'alert-30',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert'],
    files: [
      {
        path: 'src/registry/new-york/components/alert/alert-30.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/alert/alert-30.tsx'
      }
    ]
  },
  {
    name: 'avatar-01',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-01.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-01.tsx'
      }
    ]
  },
  {
    name: 'avatar-02',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-02.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-02.tsx'
      }
    ]
  },
  {
    name: 'avatar-03',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-03.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-03.tsx'
      }
    ]
  },
  {
    name: 'avatar-04',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-04.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-04.tsx'
      }
    ]
  },
  {
    name: 'avatar-05',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-05.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-05.tsx'
      }
    ]
  },
  {
    name: 'avatar-06',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-06.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-06.tsx'
      }
    ]
  },
  {
    name: 'avatar-07',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-07.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-07.tsx'
      }
    ]
  },
  {
    name: 'avatar-08',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-08.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-08.tsx'
      }
    ]
  },
  {
    name: 'avatar-09',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-09.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-09.tsx'
      }
    ]
  },
  {
    name: 'avatar-10',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-10.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-10.tsx'
      }
    ]
  },
  {
    name: 'avatar-11',
    type: 'registry:component',
    registryDependencies: ['avatar', 'badge'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-11.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-11.tsx'
      }
    ]
  },
  {
    name: 'avatar-12',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-12.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-12.tsx'
      }
    ]
  },
  {
    name: 'avatar-13',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-13.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-13.tsx'
      }
    ]
  },
  {
    name: 'avatar-14',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-14.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-14.tsx'
      }
    ]
  },
  {
    name: 'avatar-15',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-15.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-15.tsx'
      }
    ]
  },
  {
    name: 'avatar-16',
    type: 'registry:component',
    registryDependencies: ['avatar', 'tooltip'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-16.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-16.tsx'
      }
    ]
  },
  {
    name: 'avatar-17',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-17.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-17.tsx'
      }
    ]
  },
  {
    name: 'avatar-18',
    type: 'registry:component',
    registryDependencies: ['avatar', 'tooltip'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-18.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-18.tsx'
      }
    ]
  },
  {
    name: 'avatar-19',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['avatar', 'dropdown-menu'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-19.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-19.tsx'
      }
    ]
  },
  {
    name: 'avatar-20',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-20.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-20.tsx'
      }
    ]
  },
  {
    name: 'avatar-21',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/avatar/avatar-21.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/avatar/avatar-21.tsx'
      }
    ]
  },
  {
    name: 'badge-01',
    type: 'registry:component',
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-01.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-01.tsx'
      }
    ]
  },
  {
    name: 'badge-02',
    type: 'registry:component',
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-02.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-02.tsx'
      }
    ]
  },
  {
    name: 'badge-03',
    type: 'registry:component',
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-03.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-03.tsx'
      }
    ]
  },
  {
    name: 'badge-04',
    type: 'registry:component',
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-04.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-04.tsx'
      }
    ]
  },
  {
    name: 'badge-05',
    type: 'registry:component',
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-05.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-05.tsx'
      }
    ]
  },
  {
    name: 'badge-06',
    type: 'registry:component',
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-06.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-06.tsx'
      }
    ]
  },
  {
    name: 'badge-07',
    type: 'registry:component',
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-07.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-07.tsx'
      }
    ]
  },
  {
    name: 'badge-08',
    type: 'registry:component',
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-08.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-08.tsx'
      }
    ]
  },
  {
    name: 'badge-09',
    type: 'registry:component',
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-09.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-09.tsx'
      }
    ]
  },
  {
    name: 'badge-10',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-10.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-10.tsx'
      }
    ]
  },
  {
    name: 'badge-11',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-11.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-11.tsx'
      }
    ]
  },
  {
    name: 'badge-12',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-12.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-12.tsx'
      }
    ]
  },
  {
    name: 'badge-13',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['badge', 'checkbox'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-13.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-13.tsx'
      }
    ]
  },
  {
    name: 'badge-14',
    type: 'registry:component',
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-14.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-14.tsx'
      }
    ]
  },
  {
    name: 'badge-15',
    type: 'registry:component',
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-15.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-15.tsx'
      }
    ]
  },
  {
    name: 'badge-16',
    type: 'registry:component',
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-16.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-16.tsx'
      }
    ]
  },
  {
    name: 'badge-17',
    type: 'registry:component',
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-17.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-17.tsx'
      }
    ]
  },
  {
    name: 'badge-18',
    type: 'registry:component',
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-18.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-18.tsx'
      }
    ]
  },
  {
    name: 'badge-19',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-19.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-19.tsx'
      }
    ]
  },
  {
    name: 'badge-20',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-20.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-20.tsx'
      }
    ]
  },
  {
    name: 'badge-21',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-21.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-21.tsx'
      }
    ]
  },
  {
    name: 'badge-22',
    type: 'registry:component',
    registryDependencies: ['badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-22.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-22.tsx'
      }
    ]
  },
  {
    name: 'badge-23',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['avatar', 'badge'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-23.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-23.tsx'
      }
    ]
  },
  {
    name: 'badge-24',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    files: [
      {
        path: 'src/registry/new-york/components/badge/badge-24.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/badge/badge-24.tsx'
      }
    ]
  },
  {
    name: 'breadcrumb-01',
    type: 'registry:component',
    registryDependencies: ['breadcrumb'],
    files: [
      {
        path: 'src/registry/new-york/components/breadcrumb/breadcrumb-01.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/breadcrumb/breadcrumb-01.tsx'
      }
    ]
  },
  {
    name: 'breadcrumb-02',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['breadcrumb'],
    files: [
      {
        path: 'src/registry/new-york/components/breadcrumb/breadcrumb-02.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/breadcrumb/breadcrumb-02.tsx'
      }
    ]
  },
  {
    name: 'breadcrumb-03',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['breadcrumb'],
    files: [
      {
        path: 'src/registry/new-york/components/breadcrumb/breadcrumb-03.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/breadcrumb/breadcrumb-03.tsx'
      }
    ]
  },
  {
    name: 'breadcrumb-04',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['breadcrumb'],
    files: [
      {
        path: 'src/registry/new-york/components/breadcrumb/breadcrumb-04.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/breadcrumb/breadcrumb-04.tsx'
      }
    ]
  },
  {
    name: 'breadcrumb-05',
    type: 'registry:component',
    registryDependencies: ['badge', 'breadcrumb'],
    files: [
      {
        path: 'src/registry/new-york/components/breadcrumb/breadcrumb-05.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/breadcrumb/breadcrumb-05.tsx'
      }
    ]
  },
  {
    name: 'breadcrumb-06',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['badge', 'breadcrumb', 'dropdown-menu'],
    files: [
      {
        path: 'src/registry/new-york/components/breadcrumb/breadcrumb-06.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/breadcrumb/breadcrumb-06.tsx'
      }
    ]
  },
  {
    name: 'breadcrumb-07',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['breadcrumb', 'dropdown-menu'],
    files: [
      {
        path: 'src/registry/new-york/components/breadcrumb/breadcrumb-07.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/breadcrumb/breadcrumb-07.tsx'
      }
    ]
  },
  {
    name: 'breadcrumb-08',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['breadcrumb'],
    files: [
      {
        path: 'src/registry/new-york/components/breadcrumb/breadcrumb-08.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/breadcrumb/breadcrumb-08.tsx'
      }
    ]
  },
  {
    name: 'button-01',
    type: 'registry:component',
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-01.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-01.tsx'
      }
    ]
  },
  {
    name: 'button-02',
    type: 'registry:component',
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-02.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-02.tsx'
      }
    ]
  },
  {
    name: 'button-03',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-03.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-03.tsx'
      }
    ]
  },
  {
    name: 'button-04',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-04.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-04.tsx'
      }
    ]
  },
  {
    name: 'button-05',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-05.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-05.tsx'
      }
    ]
  },
  {
    name: 'button-06',
    type: 'registry:component',
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-06.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-06.tsx'
      }
    ]
  },
  {
    name: 'button-07',
    type: 'registry:component',
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-07.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-07.tsx'
      }
    ]
  },
  {
    name: 'button-08',
    type: 'registry:component',
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-08.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-08.tsx'
      }
    ]
  },
  {
    name: 'button-09',
    type: 'registry:component',
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-09.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-09.tsx'
      }
    ]
  },
  {
    name: 'button-10',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-10.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-10.tsx'
      }
    ]
  },
  {
    name: 'button-11',
    type: 'registry:component',
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-11.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-11.tsx'
      }
    ]
  },
  {
    name: 'button-12',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-12.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-12.tsx'
      }
    ]
  },
  {
    name: 'button-13',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-13.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-13.tsx'
      }
    ]
  },
  {
    name: 'button-14',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-14.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-14.tsx'
      }
    ]
  },
  {
    name: 'button-15',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-15.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-15.tsx'
      }
    ]
  },
  {
    name: 'button-16',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-16.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-16.tsx'
      }
    ]
  },
  {
    name: 'button-17',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-17.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-17.tsx'
      }
    ]
  },
  {
    name: 'button-18',
    type: 'registry:component',
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-18.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-18.tsx'
      }
    ]
  },
  {
    name: 'button-19',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-19.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-19.tsx'
      }
    ]
  },
  {
    name: 'button-20',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-20.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-20.tsx'
      }
    ]
  },
  {
    name: 'button-21',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['badge', 'button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-21.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-21.tsx'
      }
    ]
  },
  {
    name: 'button-22',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-22.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-22.tsx'
      }
    ]
  },
  {
    name: 'button-23',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-23.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-23.tsx'
      }
    ]
  },
  {
    name: 'button-24',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-24.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-24.tsx'
      }
    ]
  },
  {
    name: 'button-25',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['badge', 'button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-25.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-25.tsx'
      }
    ]
  },
  {
    name: 'button-26',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button', 'utils'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-26.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-26.tsx'
      }
    ]
  },
  {
    name: 'button-27',
    type: 'registry:component',
    registryDependencies: ['avatar', 'button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-27.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-27.tsx'
      }
    ]
  },
  {
    name: 'button-28',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button', 'utils'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-28.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-28.tsx'
      }
    ]
  },
  {
    name: 'button-29',
    type: 'registry:component',
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-29.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-29.tsx'
      }
    ]
  },
  {
    name: 'button-30',
    type: 'registry:component',
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-30.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-30.tsx'
      }
    ]
  },
  {
    name: 'button-31',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-31.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-31.tsx'
      }
    ]
  },
  {
    name: 'button-32',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button', 'tooltip'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-32.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-32.tsx'
      }
    ]
  },
  {
    name: 'button-33',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-33.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-33.tsx'
      }
    ]
  },
  {
    name: 'button-34',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button', 'utils'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-34.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-34.tsx'
      }
    ]
  },
  {
    name: 'button-35',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['badge', 'button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-35.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-35.tsx'
      }
    ]
  },
  {
    name: 'button-36',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-36.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-36.tsx'
      }
    ]
  },
  {
    name: 'button-37',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-37.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-37.tsx'
      }
    ]
  },
  {
    name: 'button-38',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-38.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-38.tsx'
      }
    ]
  },
  {
    name: 'button-39',
    type: 'registry:component',
    registryDependencies: ['https://shadcnstudio.com/r/components/ripple-button.json'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-39.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-39.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'button-40',
    type: 'registry:component',
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-40.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-40.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'button-41',
    type: 'registry:component',
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-41.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-41.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'button-42',
    type: 'registry:component',
    dependencies: ['motion'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-42.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-42.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'button-43',
    type: 'registry:component',
    registryDependencies: ['https://shadcnstudio.com/r/components/shimmer-button.json'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-43.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-43.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'button-44',
    type: 'registry:component',
    registryDependencies: ['https://shadcnstudio.com/r/components/bounce-button.json'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-44.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-44.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'button-45',
    type: 'registry:component',
    registryDependencies: ['https://shadcnstudio.com/r/components/magnetic-button.json'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-45.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-45.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'button-46',
    type: 'registry:component',
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button/button-46.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-46.tsx'
      }
    ],
    cssVars: {
      theme: {
        '--animate-heartbeat': 'heartbeat 2s infinite ease-in-out'
      }
    },
    css: {
      '@keyframes heartbeat': {
        '0%': {
          'box-shadow': '0 0 0 0 var(--destructive)',
          transform: 'scale(1)'
        },
        '50%': {
          'box-shadow': '0 0 0 7px transparent',
          transform: 'scale(1.05)'
        },
        '100%': {
          'box-shadow': '0 0 0 0 transparent',
          transform: 'scale(1)'
        }
      }
    },
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'button-47',
    type: 'registry:component',
    files: [
      {
        path: 'src/registry/new-york/components/button/button-47.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button/button-47.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'button-group-01',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button-group/button-group-01.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button-group/button-group-01.tsx'
      }
    ]
  },
  {
    name: 'button-group-02',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button', 'utils'],
    files: [
      {
        path: 'src/registry/new-york/components/button-group/button-group-02.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button-group/button-group-02.tsx'
      }
    ]
  },
  {
    name: 'button-group-03',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button', 'tooltip'],
    files: [
      {
        path: 'src/registry/new-york/components/button-group/button-group-03.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button-group/button-group-03.tsx'
      }
    ]
  },
  {
    name: 'button-group-04',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button', 'tooltip'],
    files: [
      {
        path: 'src/registry/new-york/components/button-group/button-group-04.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button-group/button-group-04.tsx'
      }
    ]
  },
  {
    name: 'button-group-05',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button-group/button-group-05.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button-group/button-group-05.tsx'
      }
    ]
  },
  {
    name: 'button-group-06',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button-group/button-group-06.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button-group/button-group-06.tsx'
      }
    ]
  },
  {
    name: 'button-group-07',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button-group/button-group-07.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button-group/button-group-07.tsx'
      }
    ]
  },
  {
    name: 'button-group-08',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button-group/button-group-08.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button-group/button-group-08.tsx'
      }
    ]
  },
  {
    name: 'button-group-09',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button-group/button-group-09.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button-group/button-group-09.tsx'
      }
    ]
  },
  {
    name: 'button-group-10',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button-group/button-group-10.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button-group/button-group-10.tsx'
      }
    ]
  },
  {
    name: 'button-group-11',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button', 'dropdown-menu'],
    files: [
      {
        path: 'src/registry/new-york/components/button-group/button-group-11.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button-group/button-group-11.tsx'
      }
    ]
  },
  {
    name: 'button-group-12',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button-group/button-group-12.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button-group/button-group-12.tsx'
      }
    ]
  },
  {
    name: 'button-group-13',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['https://shadcnstudio.com/r/components/ripple-button.json'],
    files: [
      {
        path: 'src/registry/new-york/components/button-group/button-group-13.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button-group/button-group-13.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'button-group-14',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button-group/button-group-14.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button-group/button-group-14.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'button-group-15',
    type: 'registry:component',
    dependencies: ['lucide-react', 'motion'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button-group/button-group-15.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button-group/button-group-15.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'button-group-16',
    type: 'registry:component',
    registryDependencies: ['button'],
    files: [
      {
        path: 'src/registry/new-york/components/button-group/button-group-16.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/button-group/button-group-16.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'card-01',
    type: 'registry:component',
    registryDependencies: ['button', 'card', 'input', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/card/card-01.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/card/card-01.tsx'
      }
    ]
  },
  {
    name: 'card-02',
    type: 'registry:component',
    registryDependencies: ['avatar', 'card'],
    files: [
      {
        path: 'src/registry/new-york/components/card/card-02.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/card/card-02.tsx'
      }
    ]
  },
  {
    name: 'card-03',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['avatar', 'card'],
    files: [
      {
        path: 'src/registry/new-york/components/card/card-03.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/card/card-03.tsx'
      }
    ]
  },
  {
    name: 'card-04',
    type: 'registry:component',
    registryDependencies: ['card'],
    files: [
      {
        path: 'src/registry/new-york/components/card/card-04.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/card/card-04.tsx'
      }
    ]
  },
  {
    name: 'card-05',
    type: 'registry:component',
    registryDependencies: ['button', 'card'],
    files: [
      {
        path: 'src/registry/new-york/components/card/card-05.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/card/card-05.tsx'
      }
    ]
  },
  {
    name: 'card-06',
    type: 'registry:component',
    registryDependencies: ['button', 'card'],
    files: [
      {
        path: 'src/registry/new-york/components/card/card-06.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/card/card-06.tsx'
      }
    ]
  },
  {
    name: 'card-07',
    type: 'registry:component',
    registryDependencies: ['card'],
    files: [
      {
        path: 'src/registry/new-york/components/card/card-07.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/card/card-07.tsx'
      }
    ]
  },
  {
    name: 'card-08',
    type: 'registry:component',
    registryDependencies: ['card'],
    files: [
      {
        path: 'src/registry/new-york/components/card/card-08.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/card/card-08.tsx'
      }
    ]
  },
  {
    name: 'card-09',
    type: 'registry:component',
    registryDependencies: ['card'],
    files: [
      {
        path: 'src/registry/new-york/components/card/card-09.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/card/card-09.tsx'
      }
    ]
  },
  {
    name: 'card-10',
    type: 'registry:component',
    registryDependencies: ['card', 'tabs'],
    files: [
      {
        path: 'src/registry/new-york/components/card/card-10.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/card/card-10.tsx'
      }
    ]
  },
  {
    name: 'card-11',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['avatar', 'button', 'card', 'utils'],
    files: [
      {
        path: 'src/registry/new-york/components/card/card-11.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/card/card-11.tsx'
      }
    ]
  },
  {
    name: 'card-12',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['badge', 'button', 'card', 'utils'],
    files: [
      {
        path: 'src/registry/new-york/components/card/card-12.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/card/card-12.tsx'
      }
    ]
  },
  {
    name: 'card-13',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['avatar', 'card'],
    files: [
      {
        path: 'src/registry/new-york/components/card/card-13.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/card/card-13.tsx'
      }
    ]
  },
  {
    name: 'card-14',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button', 'card'],
    files: [
      {
        path: 'src/registry/new-york/components/card/card-14.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/card/card-14.tsx'
      }
    ]
  },
  {
    name: 'card-15',
    type: 'registry:component',
    registryDependencies: ['card', 'tabs'],
    files: [
      {
        path: 'src/registry/new-york/components/card/card-15.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/card/card-15.tsx'
      }
    ],
    meta: {
      className: 'col-span-full border-e-0'
    }
  },
  {
    name: 'card-16',
    type: 'registry:component',
    registryDependencies: ['card'],
    files: [
      {
        path: 'src/registry/new-york/components/card/card-16.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/card/card-16.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'card-17',
    type: 'registry:component',
    registryDependencies: ['card'],
    files: [
      {
        path: 'src/registry/new-york/components/card/card-17.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/card/card-17.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'checkbox-01',
    type: 'registry:component',
    registryDependencies: ['checkbox', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/checkbox/checkbox-01.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/checkbox/checkbox-01.tsx'
      }
    ]
  },
  {
    name: 'checkbox-02',
    type: 'registry:component',
    dependencies: ['@radix-ui/react-checkbox', 'lucide-react'],
    registryDependencies: ['label'],
    files: [
      {
        path: 'src/registry/new-york/components/checkbox/checkbox-02.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/checkbox/checkbox-02.tsx'
      }
    ]
  },
  {
    name: 'checkbox-03',
    type: 'registry:component',
    registryDependencies: ['checkbox', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/checkbox/checkbox-03.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/checkbox/checkbox-03.tsx'
      }
    ]
  },
  {
    name: 'checkbox-04',
    type: 'registry:component',
    registryDependencies: ['checkbox', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/checkbox/checkbox-04.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/checkbox/checkbox-04.tsx'
      }
    ]
  },
  {
    name: 'checkbox-05',
    type: 'registry:component',
    registryDependencies: ['checkbox'],
    files: [
      {
        path: 'src/registry/new-york/components/checkbox/checkbox-05.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/checkbox/checkbox-05.tsx'
      }
    ]
  },
  {
    name: 'checkbox-06',
    type: 'registry:component',
    registryDependencies: ['badge', 'checkbox'],
    files: [
      {
        path: 'src/registry/new-york/components/checkbox/checkbox-06.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/checkbox/checkbox-06.tsx'
      }
    ]
  },
  {
    name: 'checkbox-07',
    type: 'registry:component',
    registryDependencies: ['checkbox', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/checkbox/checkbox-07.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/checkbox/checkbox-07.tsx'
      }
    ]
  },
  {
    name: 'checkbox-08',
    type: 'registry:component',
    registryDependencies: ['checkbox', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/checkbox/checkbox-08.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/checkbox/checkbox-08.tsx'
      }
    ]
  },
  {
    name: 'checkbox-09',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['checkbox', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/checkbox/checkbox-09.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/checkbox/checkbox-09.tsx'
      }
    ]
  },
  {
    name: 'checkbox-10',
    type: 'registry:component',
    registryDependencies: ['checkbox'],
    files: [
      {
        path: 'src/registry/new-york/components/checkbox/checkbox-10.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/checkbox/checkbox-10.tsx'
      }
    ]
  },
  {
    name: 'checkbox-11',
    type: 'registry:component',
    dependencies: ['@radix-ui/react-checkbox', 'lucide-react'],
    files: [
      {
        path: 'src/registry/new-york/components/checkbox/checkbox-11.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/checkbox/checkbox-11.tsx'
      }
    ]
  },
  {
    name: 'checkbox-12',
    type: 'registry:component',
    dependencies: ['@radix-ui/react-checkbox', 'lucide-react'],
    files: [
      {
        path: 'src/registry/new-york/components/checkbox/checkbox-12.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/checkbox/checkbox-12.tsx'
      }
    ]
  },
  {
    name: 'checkbox-13',
    type: 'registry:component',
    registryDependencies: ['checkbox', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/checkbox/checkbox-13.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/checkbox/checkbox-13.tsx'
      }
    ]
  },
  {
    name: 'checkbox-14',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['checkbox', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/checkbox/checkbox-14.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/checkbox/checkbox-14.tsx'
      }
    ]
  },
  {
    name: 'checkbox-15',
    type: 'registry:component',
    dependencies: ['@radix-ui/react-checkbox', 'lucide-react'],
    registryDependencies: ['label'],
    files: [
      {
        path: 'src/registry/new-york/components/checkbox/checkbox-15.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/checkbox/checkbox-15.tsx'
      }
    ]
  },
  {
    name: 'checkbox-16',
    type: 'registry:component',
    registryDependencies: ['button', 'checkbox', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/checkbox/checkbox-16.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/checkbox/checkbox-16.tsx'
      }
    ]
  },
  {
    name: 'checkbox-17',
    type: 'registry:component',
    registryDependencies: ['label', 'https://shadcnstudio.com/r/components/motion-checkbox.json'],
    files: [
      {
        path: 'src/registry/new-york/components/checkbox/checkbox-17.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/checkbox/checkbox-17.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'checkbox-18',
    type: 'registry:component',
    registryDependencies: ['label', 'https://shadcnstudio.com/r/components/motion-checkbox.json'],
    files: [
      {
        path: 'src/registry/new-york/components/checkbox/checkbox-18.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/checkbox/checkbox-18.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'checkbox-19',
    type: 'registry:component',
    dependencies: ['motion'],
    registryDependencies: ['checkbox', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/checkbox/checkbox-19.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/checkbox/checkbox-19.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'dialog-01',
    type: 'registry:component',
    registryDependencies: ['alert-dialog', 'button'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-01.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-01.tsx'
      }
    ]
  },
  {
    name: 'dialog-02',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert-dialog', 'button'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-02.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-02.tsx'
      }
    ]
  },
  {
    name: 'dialog-03',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['alert-dialog', 'button', 'checkbox', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-03.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-03.tsx'
      }
    ]
  },
  {
    name: 'dialog-04',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button', 'dialog', 'scroll-area'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-04.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-04.tsx'
      }
    ]
  },
  {
    name: 'dialog-05',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button', 'dialog', 'scroll-area'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-05.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-05.tsx'
      }
    ]
  },
  {
    name: 'dialog-06',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button', 'dialog', 'scroll-area'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-06.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-06.tsx'
      }
    ]
  },
  {
    name: 'dialog-07',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button', 'dialog', 'scroll-area'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-07.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-07.tsx'
      }
    ]
  },
  {
    name: 'dialog-08',
    type: 'registry:component',
    registryDependencies: ['button', 'dialog'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-08.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-08.tsx'
      }
    ]
  },
  {
    name: 'dialog-09',
    type: 'registry:component',
    registryDependencies: ['button', 'dialog', 'input', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-09.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-09.tsx'
      }
    ]
  },
  {
    name: 'dialog-10',
    type: 'registry:component',
    registryDependencies: ['avatar', 'button', 'dialog', 'input', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-10.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-10.tsx'
      }
    ]
  },
  {
    name: 'dialog-11',
    type: 'registry:component',
    registryDependencies: ['button', 'dialog', 'checkbox', 'label', 'radio-group', 'textarea'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-11.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-11.tsx'
      }
    ]
  },
  {
    name: 'dialog-12',
    type: 'registry:component',
    dependencies: ['input-otp', 'lucide-react'],
    registryDependencies: ['button', 'dialog', 'utils'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-12.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-12.tsx'
      }
    ]
  },
  {
    name: 'dialog-13',
    type: 'registry:component',
    registryDependencies: ['button', 'checkbox', 'dialog', 'input', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-13.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-13.tsx'
      }
    ]
  },
  {
    name: 'dialog-14',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button', 'dialog', 'input', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-14.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-14.tsx'
      }
    ]
  },
  {
    name: 'dialog-15',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['avatar', 'button', 'dialog', 'input', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-15.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-15.tsx'
      }
    ]
  },
  {
    name: 'dialog-16',
    type: 'registry:component',
    registryDependencies: ['button', 'dialog', 'input', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-16.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-16.tsx'
      }
    ]
  },
  {
    name: 'dialog-17',
    type: 'registry:component',
    registryDependencies: ['button', 'dialog', 'input', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-17.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-17.tsx'
      }
    ]
  },
  {
    name: 'dialog-18',
    type: 'registry:component',
    registryDependencies: ['button', 'dialog', 'input', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-18.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-18.tsx'
      }
    ]
  },
  {
    name: 'dialog-19',
    type: 'registry:component',
    registryDependencies: ['button', 'dialog', 'input', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-19.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-19.tsx'
      }
    ]
  },
  {
    name: 'dialog-20',
    type: 'registry:component',
    registryDependencies: ['button', 'dialog', 'input', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-20.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-20.tsx'
      }
    ]
  },
  {
    name: 'dialog-21',
    type: 'registry:component',
    registryDependencies: ['button', 'dialog', 'input', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-21.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-21.tsx'
      }
    ]
  },
  {
    name: 'dialog-22',
    type: 'registry:component',
    registryDependencies: ['button', 'dialog', 'input', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-22.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-22.tsx'
      }
    ]
  },
  {
    name: 'dialog-23',
    type: 'registry:component',
    registryDependencies: ['button', 'dialog', 'input', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-23.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-23.tsx'
      }
    ]
  },
  {
    name: 'dialog-24',
    type: 'registry:component',
    registryDependencies: ['button', 'dialog', 'input', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-24.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-24.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'dialog-25',
    type: 'registry:component',
    registryDependencies: ['button', 'dialog', 'input', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-25.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-25.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'dialog-26',
    type: 'registry:component',
    registryDependencies: ['button', 'dialog', 'input', 'label'],
    files: [
      {
        path: 'src/registry/new-york/components/dialog/dialog-26.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dialog/dialog-26.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'dropdown-menu-01',
    type: 'registry:component',
    registryDependencies: ['button', 'dropdown-menu'],
    files: [
      {
        path: 'src/registry/new-york/components/dropdown-menu/dropdown-menu-01.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dropdown-menu/dropdown-menu-01.tsx'
      }
    ]
  },
  {
    name: 'dropdown-menu-02',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['avatar', 'button', 'dropdown-menu'],
    files: [
      {
        path: 'src/registry/new-york/components/dropdown-menu/dropdown-menu-02.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dropdown-menu/dropdown-menu-02.tsx'
      }
    ]
  },
  {
    name: 'dropdown-menu-03',
    type: 'registry:component',
    registryDependencies: ['avatar', 'badge', 'button', 'dropdown-menu'],
    files: [
      {
        path: 'src/registry/new-york/components/dropdown-menu/dropdown-menu-03.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dropdown-menu/dropdown-menu-03.tsx'
      }
    ]
  },
  {
    name: 'dropdown-menu-04',
    type: 'registry:component',
    registryDependencies: ['avatar', 'button', 'dropdown-menu'],
    files: [
      {
        path: 'src/registry/new-york/components/dropdown-menu/dropdown-menu-04.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dropdown-menu/dropdown-menu-04.tsx'
      }
    ]
  },
  {
    name: 'dropdown-menu-05',
    type: 'registry:component',
    registryDependencies: ['avatar', 'button', 'dropdown-menu', 'switch'],
    files: [
      {
        path: 'src/registry/new-york/components/dropdown-menu/dropdown-menu-05.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dropdown-menu/dropdown-menu-05.tsx'
      }
    ]
  },
  {
    name: 'dropdown-menu-06',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button', 'dropdown-menu'],
    files: [
      {
        path: 'src/registry/new-york/components/dropdown-menu/dropdown-menu-06.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dropdown-menu/dropdown-menu-06.tsx'
      }
    ]
  },
  {
    name: 'dropdown-menu-07',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['avatar', 'button', 'dropdown-menu'],
    files: [
      {
        path: 'src/registry/new-york/components/dropdown-menu/dropdown-menu-07.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dropdown-menu/dropdown-menu-07.tsx'
      }
    ]
  },
  {
    name: 'dropdown-menu-08',
    type: 'registry:component',
    registryDependencies: ['avatar', 'button', 'dropdown-menu'],
    files: [
      {
        path: 'src/registry/new-york/components/dropdown-menu/dropdown-menu-08.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dropdown-menu/dropdown-menu-08.tsx'
      }
    ]
  },
  {
    name: 'dropdown-menu-09',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button', 'dropdown-menu'],
    files: [
      {
        path: 'src/registry/new-york/components/dropdown-menu/dropdown-menu-09.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dropdown-menu/dropdown-menu-09.tsx'
      }
    ]
  },
  {
    name: 'dropdown-menu-10',
    type: 'registry:component',
    registryDependencies: ['button', 'dropdown-menu'],
    files: [
      {
        path: 'src/registry/new-york/components/dropdown-menu/dropdown-menu-10.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dropdown-menu/dropdown-menu-10.tsx'
      }
    ]
  },
  {
    name: 'dropdown-menu-11',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button', 'dropdown-menu'],
    files: [
      {
        path: 'src/registry/new-york/components/dropdown-menu/dropdown-menu-11.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dropdown-menu/dropdown-menu-11.tsx'
      }
    ]
  },
  {
    name: 'dropdown-menu-12',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['button', 'dropdown-menu'],
    files: [
      {
        path: 'src/registry/new-york/components/dropdown-menu/dropdown-menu-12.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dropdown-menu/dropdown-menu-12.tsx'
      }
    ]
  },
  {
    name: 'dropdown-menu-13',
    type: 'registry:component',
    registryDependencies: ['button', 'dropdown-menu'],
    files: [
      {
        path: 'src/registry/new-york/components/dropdown-menu/dropdown-menu-13.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dropdown-menu/dropdown-menu-13.tsx'
      }
    ]
  },
  {
    name: 'dropdown-menu-14',
    type: 'registry:component',
    registryDependencies: ['button', 'dropdown-menu'],
    files: [
      {
        path: 'src/registry/new-york/components/dropdown-menu/dropdown-menu-14.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dropdown-menu/dropdown-menu-14.tsx'
      }
    ]
  },
  {
    name: 'dropdown-menu-15',
    type: 'registry:component',
    registryDependencies: ['button', 'dropdown-menu'],
    files: [
      {
        path: 'src/registry/new-york/components/dropdown-menu/dropdown-menu-15.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dropdown-menu/dropdown-menu-15.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'dropdown-menu-16',
    type: 'registry:component',
    registryDependencies: ['button', 'dropdown-menu', 'switch'],
    files: [
      {
        path: 'src/registry/new-york/components/dropdown-menu/dropdown-menu-16.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/dropdown-menu/dropdown-menu-16.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'radio-group-01',
    type: 'registry:component',
    registryDependencies: ['label', 'radio-group'],
    files: [
      {
        path: 'src/registry/new-york/components/radio-group/radio-group-01.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/radio-group/radio-group-01.tsx'
      }
    ]
  },
  {
    name: 'radio-group-02',
    type: 'registry:component',
    registryDependencies: ['label', 'radio-group'],
    files: [
      {
        path: 'src/registry/new-york/components/radio-group/radio-group-02.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/radio-group/radio-group-02.tsx'
      }
    ]
  },
  {
    name: 'radio-group-03',
    type: 'registry:component',
    registryDependencies: ['label', 'radio-group'],
    files: [
      {
        path: 'src/registry/new-york/components/radio-group/radio-group-03.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/radio-group/radio-group-03.tsx'
      }
    ]
  },
  {
    name: 'radio-group-04',
    type: 'registry:component',
    registryDependencies: ['label', 'radio-group'],
    files: [
      {
        path: 'src/registry/new-york/components/radio-group/radio-group-04.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/radio-group/radio-group-04.tsx'
      }
    ]
  },
  {
    name: 'radio-group-05',
    type: 'registry:component',
    registryDependencies: ['label', 'radio-group'],
    files: [
      {
        path: 'src/registry/new-york/components/radio-group/radio-group-05.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/radio-group/radio-group-05.tsx'
      }
    ]
  },
  {
    name: 'radio-group-06',
    type: 'registry:component',
    registryDependencies: ['label', 'radio-group'],
    files: [
      {
        path: 'src/registry/new-york/components/radio-group/radio-group-06.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/radio-group/radio-group-06.tsx'
      }
    ]
  },
  {
    name: 'radio-group-07',
    type: 'registry:component',
    registryDependencies: ['label', 'radio-group'],
    files: [
      {
        path: 'src/registry/new-york/components/radio-group/radio-group-07.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/radio-group/radio-group-07.tsx'
      }
    ]
  },
  {
    name: 'radio-group-08',
    type: 'registry:component',
    registryDependencies: ['radio-group'],
    files: [
      {
        path: 'src/registry/new-york/components/radio-group/radio-group-08.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/radio-group/radio-group-08.tsx'
      }
    ]
  },
  {
    name: 'radio-group-09',
    type: 'registry:component',
    registryDependencies: ['badge', 'label', 'radio-group'],
    files: [
      {
        path: 'src/registry/new-york/components/radio-group/radio-group-09.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/radio-group/radio-group-09.tsx'
      }
    ]
  },
  {
    name: 'radio-group-10',
    type: 'registry:component',
    registryDependencies: ['badge', 'label', 'radio-group'],
    files: [
      {
        path: 'src/registry/new-york/components/radio-group/radio-group-10.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/radio-group/radio-group-10.tsx'
      }
    ]
  },
  {
    name: 'radio-group-11',
    type: 'registry:component',
    registryDependencies: ['label', 'radio-group'],
    files: [
      {
        path: 'src/registry/new-york/components/radio-group/radio-group-11.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/radio-group/radio-group-11.tsx'
      }
    ]
  },
  {
    name: 'radio-group-12',
    type: 'registry:component',
    registryDependencies: ['label', 'radio-group'],
    files: [
      {
        path: 'src/registry/new-york/components/radio-group/radio-group-12.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/radio-group/radio-group-12.tsx'
      }
    ]
  },
  {
    name: 'radio-group-13',
    type: 'registry:component',
    dependencies: ['lucide-react'],
    registryDependencies: ['badge', 'label', 'radio-group'],
    files: [
      {
        path: 'src/registry/new-york/components/radio-group/radio-group-13.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/radio-group/radio-group-13.tsx'
      }
    ]
  },
  {
    name: 'radio-group-14',
    type: 'registry:component',
    registryDependencies: ['label', 'https://shadcnstudio.com/r/components/motion-radio-group.json'],
    files: [
      {
        path: 'src/registry/new-york/components/radio-group/radio-group-14.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/radio-group/radio-group-14.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  },
  {
    name: 'radio-group-15',
    type: 'registry:component',
    registryDependencies: ['label', 'radio-group'],
    files: [
      {
        path: 'src/registry/new-york/components/radio-group/radio-group-15.tsx',
        type: 'registry:component',
        target: 'components/shadcn-studio/radio-group/radio-group-15.tsx'
      }
    ],
    meta: {
      isAnimated: true
    }
  }
]
