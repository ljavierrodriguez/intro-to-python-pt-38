""" Variables """
# comentario simple

nombre = ""
apellido = ''
nombre_completo = '''contenido'''

edad = 50
saldo = 14.50
grados = -10.5
posicion = -5

activo = True | False

direccion = None

usuarios = None

persona = {
    "nombre": "",
    "apellido": ""
}

print(persona['nombre'])


# List
frutas = ["Pera", "Manzana", "Uva"]

# Tuples
nombres = ("Pedro", "Juan", "Miguel")

# Set
status = { "activo", "inactivo", "cancelado", "suspendido", "completado"} 


print(frutas[0])

print(nombres[2])

print(status)

def sumar(a, b):
    return a + b 

restar = lambda a, b : a - b

def multiplicar(a, b):
    pass 