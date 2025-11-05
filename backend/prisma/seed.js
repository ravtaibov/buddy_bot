const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.upsert({
    where: { slug: 'barber-from-scratch' },
    update: {},
    create: {
      slug: 'barber-from-scratch',
      title: 'Барбер с нуля',
      description: 'Базовый интенсив для старта',
      lessons: {
        create: [
          { order: 1, title: 'Работа с машинкой', description: 'Основы', contentUrl: null },
          { order: 2, title: 'Fade', description: 'Техника перехода', contentUrl: null }
        ]
      }
    }
  });
  console.log('Seed done:', course.slug);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());