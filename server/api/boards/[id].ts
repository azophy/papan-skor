import { prisma } from '../../index'

export default defineEventHandler(async (event) => {
    try {
      const id = event.context.params.id
      const board = await prisma.board.findUnique({
        where: { id },
      })
      return { succes: true, data: board }
    } catch (err: Error) {
      return { succes: false, msg: err.message }
    }
})
