import getData from './getData'

export default async (splash) =>
  splash.change(await getData())
