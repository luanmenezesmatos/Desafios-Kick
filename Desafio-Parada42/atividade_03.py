valor_total = 0

codigo = input("Digite o código do produto: ")
nome_produto = input("Digite o nome do produto: ")
quantidade = int(input("Digite a quantidade: "))
preco = float(input("Digite o preço: "))
valor_produto = quantidade * preco
valor_total += valor_produto

while True:
    continuar = input("Deseja cadastrar outro produto? (sim/não): ")
    if continuar.lower() != 'sim':
        break
    
    codigo = input("Digite o código do produto: ")
    nome_produto = input("Digite o nome do produto: ")
    quantidade = int(input("Digite a quantidade: "))
    preco = float(input("Digite o preço: "))
    valor_produto = quantidade * preco
    valor_total += valor_produto

print("Valor Total da Compra:", valor_total)