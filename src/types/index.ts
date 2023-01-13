export type ProjectTypes = {
    id: number
    name: string
    image: string
    deploy: string
    repository: string
}

type ValueText = {
    value: boolean
    text: string
}

export type EmailValidationResponse = {
    email: string
    autocorrect: string
    deliverability: string
    quality_score: string
    is_valid_format: ValueText
    is_free_email: ValueText
    is_disposable_email: ValueText
    is_role_email: ValueText
    is_catchall_email: ValueText
    is_mx_found: ValueText
    is_smtp_valid: ValueText
}