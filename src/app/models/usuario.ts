export class Usuario {

  private nome: string;
  private email: string;

  public constructor({nome, email}) {
    this.nome = nome;
    this.email = email;
  }

  get getNome(): string {
    return this.nome;
  }

  get getEmail(): string {
    return this.email;
  }
  
  set setNome(nome: string) {
    this.nome = nome;
  }

  set setEmail(email: string) {
    this.email = email;
  }

}