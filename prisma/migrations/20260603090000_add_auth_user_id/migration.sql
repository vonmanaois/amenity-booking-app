-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "authUserId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_authUserId_key" ON "public"."User"("authUserId");
