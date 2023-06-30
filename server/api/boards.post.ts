import { createId } from '@paralleldrive/cuid2'

const runtimeConfig = useRuntimeConfig()

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
        updated_at: Date.now(),
      }
      await storage.setItem(
        `board/${new_id}`,
        JSON.stringify(data),
        { ttl: runtimeConfig.boardExpiryLimit }
      )
      return { success: true, ...data }
    } catch (err: Error) {
      return { succes: false, msg: err.message }
    }
})
