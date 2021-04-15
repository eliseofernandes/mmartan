import { ImageEntity } from 'src/image/entities/image.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IProduct } from '../interfaces/product.interface';

@Entity('product')
export class ProductEntity implements IProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  discount_price: number;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => ImageEntity, (image) => image.product)
  images: ImageEntity[];
}
