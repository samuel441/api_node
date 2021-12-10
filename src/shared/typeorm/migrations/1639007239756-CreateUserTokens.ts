import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTokens1607917238905 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_tokens',
        columns: [
          {
            name: 'id',
            type: 'char(36)',
            isPrimary: true,
            // generationStrategy: 'uuid',
            // default: 'uuid_generate_v4()',
          },
          {
            name: 'token',
            type: 'char(36)',
            // generationStrategy: 'uuid',
            // default: 'uuid_generate_v4()',
          },
          {
            name: 'user_id',
            type: 'char(36)',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'TokenUser',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'], //nome do campo desta tabela
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_tokens');
  }
}
