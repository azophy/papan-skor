export default defineEventHandler(async (event) => {
    const storage = useStorage('data')

    try {
      const id = event.context.params.id
      const board = await storage.getItem(`board/${id}`)
      if (!board) throw new Error('board not found or expired');
      
      return { success: true, data: board }
    } catch (err: Error) {
      return { success: false, msg: err.message }
    }
})
