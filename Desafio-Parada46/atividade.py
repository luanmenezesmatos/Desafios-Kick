def verificar_par_impar(numero):
  if numero == 0:
    print("O número é zero.")
  elif numero % 2 == 0:
    print(f"O número {numero} é par.")
  else:
    print(f"O número {numero} é ímpar.")

numero_teste = int(input("Digite um número: "))
verificar_par_impar(numero_teste)