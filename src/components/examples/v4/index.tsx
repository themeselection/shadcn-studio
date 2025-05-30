import { AccordionDemo } from './components/AccordionDemo'
import { AlertDemo } from './components/AlertDemo'
import { AlertDialogDemo } from './components/AlertDialogDemo'
import { AspectRatioDemo } from './components/AspectRatioDemo'
import { AvatarDemo } from './components/AvatarDemo'
import { BadgeDemo } from './components/BadgeDemo'
import { BreadcrumbDemo } from './components/BreadcrumbDemo'
import { ButtonDemo } from './components/ButtonDemo'
import { CalendarDemo } from './components/CalendarDemo'
import { CardDemo } from './components/CardDemo'
import { CarouselDemo } from './components/CarouselDemo'
import { ChartDemo } from './components/ChartDemo'
import { CheckboxDemo } from './components/CheckboxDemo'
import { CollapsibleDemo } from './components/CollapsibleDemo'
import { ComboboxDemo } from './components/ComboboxDemo'
import { CommandDemo } from './components/CommandDemo'
import { ComponentWrapper } from './components/ComponentWrapper'
import { ContextMenuDemo } from './components/ContextMenuDemo'
import { DatePickerDemo } from './components/DatePickerDemo'
import { DialogDemo } from './components/DialogDemo'
import { DrawerDemo } from './components/DrawerDemo'
import { DropdownMenuDemo } from './components/DropdownMenuDemo'
import { FormDemo } from './components/FormDemo'
import { HoverCardDemo } from './components/HoverCardDemo'
import { InputDemo } from './components/InputDemo'
import { InputOTPDemo } from './components/InputOtpDemo'
import { LabelDemo } from './components/LabelDemo'
import { MenubarDemo } from './components/MenubarDemo'
import { NavigationMenuDemo } from './components/NavigationMenuDemo'
import { PaginationDemo } from './components/PaginationDemo'
import { PopoverDemo } from './components/PopoverDemo'
import { ProgressDemo } from './components/ProgressDemo'
import { RadioGroupDemo } from './components/RadioGroupDemo'
import { ResizableDemo } from './components/ResizableDemo'
import { ScrollAreaDemo } from './components/ScrollAreaDemo'
import { SelectDemo } from './components/SelectDemo'
import { SeparatorDemo } from './components/SeparatorDemo'
import { SheetDemo } from './components/SheetDemo'
import { SkeletonDemo } from './components/SkeletonDemo'
import { SliderDemo } from './components/SliderDemo'
import { SonnerDemo } from './components/SonnerDemo'
import { SwitchDemo } from './components/SwitchDemo'
import { TableDemo } from './components/TableDemo'
import { TabsDemo } from './components/TabsDemo'
import { TextareaDemo } from './components/TextareaDemo'
import { ToggleDemo } from './components/ToggleDemo'
import { ToggleGroupDemo } from './components/ToggleGroupDemo'
import { TooltipDemo } from './components/TooltipDemo'

export default function SinkPage() {
  return (
    <div className='@container grid flex-1 gap-4 p-4'>
      <ComponentWrapper name='chart' className='w-full'>
        <ChartDemo />
      </ComponentWrapper>
      <ComponentWrapper name='accordion'>
        <AccordionDemo />
      </ComponentWrapper>
      <ComponentWrapper name='alert'>
        <AlertDemo />
      </ComponentWrapper>
      <ComponentWrapper name='alert-dialog'>
        <AlertDialogDemo />
      </ComponentWrapper>
      <ComponentWrapper name='aspect-ratio'>
        <AspectRatioDemo />
      </ComponentWrapper>
      <ComponentWrapper name='avatar'>
        <AvatarDemo />
      </ComponentWrapper>
      <ComponentWrapper name='badge'>
        <BadgeDemo />
      </ComponentWrapper>
      <ComponentWrapper name='breadcrumb'>
        <BreadcrumbDemo />
      </ComponentWrapper>
      <ComponentWrapper name='button'>
        <ButtonDemo />
      </ComponentWrapper>
      <ComponentWrapper name='calendar'>
        <CalendarDemo />
      </ComponentWrapper>
      <ComponentWrapper name='card'>
        <CardDemo />
      </ComponentWrapper>
      <ComponentWrapper name='carousel'>
        <CarouselDemo />
      </ComponentWrapper>
      <ComponentWrapper name='checkbox'>
        <CheckboxDemo />
      </ComponentWrapper>
      <ComponentWrapper name='collapsible'>
        <CollapsibleDemo />
      </ComponentWrapper>
      <ComponentWrapper name='combobox'>
        <ComboboxDemo />
      </ComponentWrapper>
      <ComponentWrapper name='command'>
        <CommandDemo />
      </ComponentWrapper>
      <ComponentWrapper name='context-menu'>
        <ContextMenuDemo />
      </ComponentWrapper>
      <ComponentWrapper name='date-picker'>
        <DatePickerDemo />
      </ComponentWrapper>
      <ComponentWrapper name='dialog'>
        <DialogDemo />
      </ComponentWrapper>
      <ComponentWrapper name='drawer'>
        <DrawerDemo />
      </ComponentWrapper>
      <ComponentWrapper name='dropdown-menu'>
        <DropdownMenuDemo />
      </ComponentWrapper>
      <ComponentWrapper name='form'>
        <FormDemo />
      </ComponentWrapper>
      <ComponentWrapper name='hover-card'>
        <HoverCardDemo />
      </ComponentWrapper>
      <ComponentWrapper name='input'>
        <InputDemo />
      </ComponentWrapper>
      <ComponentWrapper name='input-otp'>
        <InputOTPDemo />
      </ComponentWrapper>
      <ComponentWrapper name='label'>
        <LabelDemo />
      </ComponentWrapper>
      <ComponentWrapper name='menubar'>
        <MenubarDemo />
      </ComponentWrapper>
      <ComponentWrapper name='navigation-menu'>
        <NavigationMenuDemo />
      </ComponentWrapper>
      <ComponentWrapper name='pagination'>
        <PaginationDemo />
      </ComponentWrapper>
      <ComponentWrapper name='popover'>
        <PopoverDemo />
      </ComponentWrapper>
      <ComponentWrapper name='progress'>
        <ProgressDemo />
      </ComponentWrapper>
      <ComponentWrapper name='radio-group'>
        <RadioGroupDemo />
      </ComponentWrapper>
      <ComponentWrapper name='resizable'>
        <ResizableDemo />
      </ComponentWrapper>
      <ComponentWrapper name='scroll-area'>
        <ScrollAreaDemo />
      </ComponentWrapper>
      <ComponentWrapper name='select'>
        <SelectDemo />
      </ComponentWrapper>
      <ComponentWrapper name='separator'>
        <SeparatorDemo />
      </ComponentWrapper>
      <ComponentWrapper name='sheet'>
        <SheetDemo />
      </ComponentWrapper>
      <ComponentWrapper name='skeleton'>
        <SkeletonDemo />
      </ComponentWrapper>
      <ComponentWrapper name='slider'>
        <SliderDemo />
      </ComponentWrapper>
      <ComponentWrapper name='sonner'>
        <SonnerDemo />
      </ComponentWrapper>
      <ComponentWrapper name='switch'>
        <SwitchDemo />
      </ComponentWrapper>
      <ComponentWrapper name='table'>
        <TableDemo />
      </ComponentWrapper>
      <ComponentWrapper name='tabs'>
        <TabsDemo />
      </ComponentWrapper>
      <ComponentWrapper name='textarea'>
        <TextareaDemo />
      </ComponentWrapper>
      <ComponentWrapper name='toggle'>
        <ToggleDemo />
      </ComponentWrapper>
      <ComponentWrapper name='toggle-group'>
        <ToggleGroupDemo />
      </ComponentWrapper>
      <ComponentWrapper name='tooltip'>
        <TooltipDemo />
      </ComponentWrapper>
    </div>
  )
}
