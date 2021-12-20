import {Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Category } from './Category';

@Entity('videos') //os 'decorations' são dados para serem referenciados ao DB
export class Video{

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  category_id: string;

  @ManyToOne(()=> Category) //Muitos vídeos para Uma categoria. E 'chama' o objeto 'Category'
  @JoinColumn({name: 'category_id'}) // @joinColumn é um decorator que faz a ligação entre a tabela 'categories' e a tabela 'videos'
  category: Category;

  @Column()
  duration: number;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){ //Se não vir nenhum 'id' como parâmetro, Ou seja, se não for nenhuma atualização ou remoção. Será uma inserção
      this.id = uuid(); //Sendo inserção, o 'uuid' gerará um 'id'.
    }
  }
}