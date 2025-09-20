import { ClassesProps } from "./ClassesProps";

export interface FieldProps extends ClassesProps {
    isInvalid?: boolean
    onChange?: (newValue: string) => void
}