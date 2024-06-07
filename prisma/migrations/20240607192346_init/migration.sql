-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "createdOn" TIMESTAMP(3) NOT NULL,
    "payer" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "payerPhone" TEXT NOT NULL,
    "services" TEXT NOT NULL,
    "scheduled" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");
