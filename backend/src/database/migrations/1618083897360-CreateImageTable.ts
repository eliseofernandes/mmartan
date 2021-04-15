import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateImageTable1618083897360 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'image',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'product_id',
            type: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'url',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'image',
      new TableForeignKey({
        columnNames: ['product_id'],
        referencedTableName: 'product',
        referencedColumnNames: ['id'],
      }),
    );
    const products = await queryRunner.manager.find('product');

    const imageObject = [];

    for (let index = 0; index < products?.length; index++) {
      const product_id = (products[index] as any)?.id;

      const image1Data = {
        product_id,
        name: 'Image - 1',
        url: 'https://source.unsplash.com/8-gTweicLAk',
      };

      const image2Data = {
        product_id,
        name: 'Image - 2',
        url: 'https://source.unsplash.com/53BjYSxca5g',
      };

      const image3Data = {
        product_id,
        name: 'Image - 3',
        url: 'https://source.unsplash.com/JOv1emLpGZU',
      };

      const image4Data = {
        product_id,
        name: 'Image - 4',
        url: 'https://source.unsplash.com/l4NyVO-Q50M',
      };
      imageObject.push(image1Data, image2Data, image3Data, image4Data);
    }

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('image')
      .values(imageObject)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('image');
  }
}
