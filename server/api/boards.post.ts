import { createId } from '@paralleldrive/cuid2'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const storage = useStorage('data')

    try {
      const new_id = createId()
      const data = {
        id: new_id,
        title: body.new_title,
        data: body.new_participants.map((label, id) => ({
          id,
          label,
          count: 0,
        })),
        //updatedAt: now
      }
      await storage.setItem(`board/${new_id}`, JSON.stringify(data) )
      return { success: true, ...data }
    } catch (err: Error) {
      return { succes: false, msg: err.message }
    }
})
