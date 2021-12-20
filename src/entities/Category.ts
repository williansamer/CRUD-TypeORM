import {Entity, Column, PrimaryColumn, CreateDateColumn} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('categories') //os 'decorations' são dados para serem referenciados ao DB
export class Category{

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){ //Se não vir nenhum 'id' como parâmetro, Ou seja, se não for nenhuma atualização ou remoção. Será uma inserção
      this.id = uuid(); //Sendo inserção, o 'uuid' gerará um 'id'.
    }
  }
}