export class Point {
    #x
    #y
    constructor(x, y) {
      this.#x = x;
      this.#y = y;
    }

    get r() {
      return Math.hypot(this.#x, this.#y)
    }

    get theta() {
      return this.#y ? Math.atan(this.#x /this.#y) : 0
    }

    get x() {
      return this.#x;
    }

    get y() {
      return this.y;
    }

    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
}