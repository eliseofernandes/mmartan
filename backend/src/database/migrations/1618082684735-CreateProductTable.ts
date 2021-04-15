import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProductTable1618082684735 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'product',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'double precision',
          },
          {
            name: 'discount_price',
            type: 'double precision',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );

    const productObject = [];

    for (let index = 0; index < 200; index++) {
      const productData = {
        name: `Kit de cama 210 fios - ${index}`,
        description: `Classic I - Solteiro Extra - ${index}`,
        price: 298.0,
        discount_price: 98.0,
      };

      productObject.push(productData);
    }

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('product')
      .values(productObject)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product');
  }
}
