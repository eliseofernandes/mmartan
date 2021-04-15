import { ProductEntity } from 'src/product/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IImage } from '../interfaces/image.interface';

@Entity('image')
export class ImageEntity implements IImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  product_id: string;

  @Column()
  name: string;

  @Column()
  url: string;

  @CreateDateColumn()
  created_at: Date;

  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  @ManyToOne(() => ProductEntity, (product) => product.images)
  product: ProductEntity;
}
