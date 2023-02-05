import useErrorMapper from './useErrorMapper'
import { ISession } from '~/types/ISession'
export async function registerWithEmail(
    username: string,
    name: string,
    email: string,
    password: string
): Promise<FormValidation> {
    try {
        const data = await $fetch<ISession>('/api/auth/register', {
            method: 'POST',
            body: { username, name, email, password },
        })

        if (data) {
            useState('user').value = data
            await useRouter().push('/dashboard')
        }

        return { hasErrors: false, loggedIn: true }
    } catch (error: any) {
        return useErrorMapper(error.data.data)
    }
}
