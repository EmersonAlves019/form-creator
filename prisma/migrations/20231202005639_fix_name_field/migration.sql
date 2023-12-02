/*
  Warnings:

  - You are about to drop the column `naem` on the `Form` table. All the data in the column will be lost.
  - Added the required column `name` to the `Form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Form" DROP COLUMN "naem",
ADD COLUMN     "name" TEXT NOT NULL;
