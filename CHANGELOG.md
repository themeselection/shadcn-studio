<!-- Available h3 headings: Added, Fixed, Updated, Removed, Deprecated -->

# Changelog

All notable changes to this project will be documented in this file.

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
