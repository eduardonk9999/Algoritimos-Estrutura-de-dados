function Stack() {
  let items = []

  this.push = function(element) {
    // add um novo item à pilha
    this.items.push(element)
  }

  this.pop = function() {
    //remover o item do topo da pilha
    return this.items.pop()
  }

  this.peek = function() {
    // devolve o elemento que está no topo da pilha
    return this.items[this.items.length - 1]
  }

  this.isEmpty = function() {
    //informa se a pilha está vazia ou não
    return this.items.length === 0
  }

  this.clear = function() {
    // limpa a pilha
    this.items = []
  }
  
  this.size = function() {
    // informa o tamanho da pilha
    return this.items.length
  }

  this.print = function() {
    //imprime a pilha no console

  }
}


