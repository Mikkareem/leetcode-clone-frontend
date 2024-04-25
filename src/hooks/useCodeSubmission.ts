
import { useMutation } from '@tanstack/react-query'
import { runCode } from '../services/api'
import useLocalStorage from './useLocalStorage'

export default function useCodeSubmission() {

    const { value: token } = useLocalStorage('token', '')

    const { mutate: runCodeX, data, isPending, isError } = useMutation({
        mutationFn: (data: { code: string, problemId: string }) => runCode(token, data),

        onMutate() {
            console.log('onMutate')
        },

        onSuccess(data) {
            console.log('onSuccess ' + data)
        },

        onError(error) {
            console.log('onError ' + error.message)
        },

        onSettled() {
            console.log('onSettled')
        }
    })

    return {
        runCodeX,
        data,
        isError,
        isPending
    }
}
