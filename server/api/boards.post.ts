import { prisma } from '../index'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    // return body.new_participants

    try {
      const data = {
        title: body.new_title,
        data: body.new_participants.map((label, id) => ({
          id,
          label,
          count: 0,
        })),
        //updatedAt: now
      }
      const result = await prisma.board.create({ data })
      return { success: true, ...result }
    } catch (err: Error) {
      return { succes: false, msg: err.message }
    }
})
