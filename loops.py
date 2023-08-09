""" Loops """

""" 

for iterador in coleccion:
    setencias


while condicion:
    sentencias


"""

notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for num in range(1, 11): # start = 0, stop = X, step = 1 
    print(num)

size = len(notas)    
for indice in range(0, size):
    print(notas[indice])

for nota in notas:
    print(nota)
    
    
num = 1
while num <= 10:
    print(num)
    

indice = 0
size = len(notas)
while indice < size:
    print(notas[indice])
    indice += 1
    
    
puestos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for i in range(len(puestos)):
    for j in range(len(puestos[i])):
        print(puestos[i][j])
        
for row in puestos:
    for col in row:
        print(col)
