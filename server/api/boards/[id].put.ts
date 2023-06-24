import { prisma } from '../../index'

export default defineEventHandler(async (event) => {
    try {
      const id = event.context.params.id
      const body = await readBody(event)
      const board = await prisma.board.update({
        data: body,
        where: { id },
      })
      return { succes: true, data: board }
    } catch (err: Error) {
      return { succes: false, msg: err.message }
    }
})
