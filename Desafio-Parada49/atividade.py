# Abre o arquivo em modo de leitura
with open("texto.txt", "r") as arquivo:
  conteudoArquivo = arquivo.read()

vogaisArray = ['a', 'e', 'i', 'o', 'u']

contadorVogais = 0

for letra in conteudoArquivo:
    if letra.lower() in vogaisArray:
        contadorVogais += 1

print(f"O número de vogais no texto é: {contadorVogais}")