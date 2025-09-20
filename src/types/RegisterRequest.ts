export type RegisterRequest = {
    Email:          string,
    Username:       string,
    Password:       string,
    RepeatPassword: string,
    CaptchaToken:   string
}