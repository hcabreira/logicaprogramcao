class Heroi:
    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo

    def atacar(self):
        ataques = {
            "mago": "usou magia",
            "guerreiro": "usou espada",
            "monge": "usou artes marciais",
            "ninja": "usou shuriken"
        }
        
        ataque = ataques.get(self.tipo, "fez um ataque desconhecido")
        print(f"O {self.tipo} atacou usando {ataque}")

# Exemplos de uso
heroi1 = Heroi("Gandalf", 2019, "mago")
heroi1.atacar()  # Saída esperada: O mago atacou usando magia

heroi2 = Heroi("Arthur", 35, "guerreiro")
heroi2.atacar()  # Saída esperada: O guerreiro atacou usando espada

heroi3 = Heroi("Aang", 112, "monge")
heroi3.atacar()  # Saída esperada: O monge atacou usando artes marciais

heroi4 = Heroi("Naruto", 17, "ninja")
heroi4.atacar()  # Saída esperada: O ninja atacou usando shuriken

heroi5 = Heroi("Desconhecido", 30, "desconhecido")
heroi5.atacar()  # Saída esperada: O desconhecido fez um ataque desconhecido