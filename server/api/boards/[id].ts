export default defineEventHandler(async (event) => {
    const storage = useStorage('data')

    try {
      const id = event.context.params.id
      const board = await storage.getItem(`board/${id}`)
      return { succes: true, data: board }
    } catch (err: Error) {
      return { succes: false, msg: err.message }
    }
})
