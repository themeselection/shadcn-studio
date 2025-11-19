<!-- Available h3 headings: Added, Fixed, Updated, Removed, Deprecated -->

# Changelog

All notable changes to this project will be documented in this file.

## v1.0.0 (2025-11-19)

### Added

- Added blocks
- Added registries for easier access to component variants, blocks and themes
- Added navigation pagination inside component pages
- Added functionality to show component variant name when hover inside a component variant section
- Added tags to component variants for better categorization and filtering in search

### Updated

- Updated shadcn/ui components
- Updated component variants to match the latest shadcn/ui components
- Updated shadcn/ui color theme from zinc to neutral
- Updated layouts including Sidebar, Header and Footer
- Updated animated button variant with heartbeat effect so that you can change the animation color via CSS variable. You can update the color of the animation using the `--heartbeat-color` CSS variable or inline styles like `style={{ '--heartbeat-color': 'var(--primary)' }}`
- Updated meta tags for the pages
- Updated fonts by removing Gamja Flower font and adding Kalam font
- Updated introduction docs
- Updated SVGs (including SVG component and namings) and data assets
- Updated hooks and utils

### Removed

- Removed unnecessary data assets
- Removed copy prompt and v0 components
- Removed `getMode` server utility function
- Removed roadmap section from the theme generator page as we have moved it to [GitHub](https://github.com/orgs/themeselection/projects/42/views/2)

### Fixed

- Fixed default selected item in theme presets dropdown

## v1.0.0-beta.3 (2025-07-04)

### Added

- Added Pagination, Sheet, Sonner and Tabs component variants
- Added Animated Tabs component variants

## v1.0.0-beta.2 (2025-06-27)

### Added

- Added Collapsible, Data table, Form, Hover Card, Popover, Table and Tooltip component variants
- Added Animated Collapsible, Popover and Tooltip component variants

## v1.0.0-beta.1 (2025-06-20)

### Added

- Added Calendar, Combobox, Date and Time Picker, Form, Input, Input Mask, Input OTP, Select, Switch & Textarea component variants
- Added Animated Combobox, Select & Switch component variants
- Added Art Deco & Marshmallow themes

### Updated

- Relocated the following folders to their new paths:
  - All ui components from `src/registry/new-york/ui` to `src/components/ui`
  - All component variants from `src/registry/new-york/components` to `src/components/shadcn-studio`
  - All hooks from `src/registry/new-york/hooks` to `src/hooks`
  - All libs from `src/registry/new-york/lib` to `src/lib`

### Removed

- Removed all registries from `public/r` and `src/registry` directories including generating scripts

## v1.0.0-alpha.3 (2025-06-06)

### Added

- Added Button Group, Card, Checkbox, Dialog (also Alert Dialog) & Radio Group component variants
- Added Animated Button Group, Card, Checkbox, Dialog & Radio Group component variants
- Added VS Code & Spotify themes

### Updated

- Moved all scripts from `scripts` to `src/scripts`
- Moved all components registry from `public/r` to `public/r/components` with the help of `generate-components-registry.ts` script
- Removed `registry.json` file and added `src/registry/registry-components.ts` file for generating registries from `generate-components-registry.ts` script

## v1.0.0-alpha.2 (2025-05-30)

### Added

- Added Accordion, Alert, Button & Dropdown Menu component variants
- Added Animated Button component variants
- Added Marvel, Material Design & Summer themes

### Updated

- Updated Avatar 10 & Avatar 19 variants
- Updated Breadcrumb 03, Breadcrumb 07 & Breadcrumb 08 variants

## v1.0.0-alpha.1 (2025-04-23)

### Added

- Initial Release
