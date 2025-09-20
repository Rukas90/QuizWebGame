import { ChildrenProps } from "./ChildrenProps";
import { ClassesProps } from "./ClassesProps";

export interface BaseElementProps extends ChildrenProps, ClassesProps {
    id?: string
}