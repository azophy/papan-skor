export default defineEventHandler(async (event) => {
    const storage = useStorage('data')

    try {
      const id = event.context.params.id
      let body = await readBody(event)
      body.updated_at = Date.now()
      await storage.setItem(`board/${id}`, JSON.stringify(body) )
      return { succes: true, data: body }
    } catch (err: Error) {
      return { succes: false, msg: err.message }
    }
})
