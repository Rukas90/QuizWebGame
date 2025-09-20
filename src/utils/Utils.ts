export const getRandomEnumValue = <TEnum extends Record<string, string | number>> 
    (enumeration: TEnum, skipCurrent?: boolean, current?: TEnum[keyof TEnum]): TEnum[keyof TEnum] => 
{
    const values = Object.values(enumeration) as Array<TEnum[keyof TEnum]>

    let candidateValues = values

    if (skipCurrent && current !== undefined) {
        candidateValues = values.filter(value => value !== current)

        if (candidateValues.length === 0) {
          candidateValues = values
        }
    }
    const randomIndex = Math.floor(Math.random() * candidateValues.length)
    return candidateValues[randomIndex]
}
export const withPositivePrefix = (number: number) => {
    return (number <0 ? "" : "+") + number;
}