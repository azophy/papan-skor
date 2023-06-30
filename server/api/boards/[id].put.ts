export default defineEventHandler(async (event) => {
    const storage = useStorage('data')

    try {
      const id = event.context.params.id
      const body = await readBody(event)
      await storage.setItem(`board/${id}`, JSON.stringify(body) )
      return { succes: true, data: body }
    } catch (err: Error) {
      return { succes: false, msg: err.message }
    }
})
