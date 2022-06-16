let _hero: string

class Context {
  getHero(): string {
    return _hero
  }

  setHero(hero: string) {
    _hero = hero
  }
}
const context = new Context()

export default context