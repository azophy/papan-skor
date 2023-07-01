const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const storage = useStorage('data')

    try {
      const new_id = body.new_id
      const storage_key = `board/${new_id}`
      const is_exists = await storage.hasItem(storage_key)

      if (is_exists) throw new Error("url already exists");

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
        storage_key,
        JSON.stringify(data),
        { ttl: runtimeConfig.boardExpiryLimit }
      )
      return { success: true, ...data }
    } catch (err: Error) {
      return { success: false, msg: err.message }
    }
})
