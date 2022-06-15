let _hero: string

class Context {
  gethero(): string {
    return _hero
  }

  sethero(hero) {
    _hero = hero
  }
}
const context = new Context()

export default context