/* eslint-env node */
import {faker} from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

const personName = faker.person.fullName()
const personBio = faker.person.bio()
console.log( "Hi I am ", personName, " I am ", personBio)
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SERVICE_ROLE_KEY
)

const seedProject = async() => {
  const name = faker.lorem.words(3)
  await supabase.from('projects').insert({
    name: name,
    slug: name.toLocaleLowerCase().replace(/ /g, '-'),
    status: faker.helpers.arrayElement(['in-progress','not-started', 'completed']),
    collaborators: faker.helpers.arrayElement([1,2,3])}
  )
}
await seedProject()
