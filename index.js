export default function(iterable, length) {
  return Array.from({ length }, function() {
    return this.next().value
  }, (function*() {
    for (;;) yield* iterable
  })())
}