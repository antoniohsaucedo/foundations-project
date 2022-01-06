CREATE TABLE "public.user" (
	"user_id" serial NOT NULL,
	"username" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.post_list" (
	"post_id" serial NOT NULL,
	"description" varchar(255) NOT NULL,
	"user_id" int NOT NULL,
	CONSTRAINT "post_list_pk" PRIMARY KEY ("post_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.photos" (
	"photos_id" serial NOT NULL,
	"url" varchar(1000) NOT NULL,
	"user_id" int NOT NULL,
	CONSTRAINT "photos_pk" PRIMARY KEY ("photos_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.price" (
	"price_id" serial NOT NULL,
	"price" serial NOT NULL,
	"user_id" int NOT NULL,
	CONSTRAINT "price_pk" PRIMARY KEY ("price_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.platform" (
	"platform_id" serial NOT NULL,
	"facebook" serial(255) NOT NULL,
	"tiktok" serial(255) NOT NULL,
	"youtube" serial(255) NOT NULL,
	"instagram" serial(255) NOT NULL,
	"twitter" serial(255) NOT NULL,
	"user_id" int NOT NULL,
	CONSTRAINT "platform_pk" PRIMARY KEY ("platform_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "post_list" ADD CONSTRAINT "post_list_fk0" FOREIGN KEY ("post_id") REFERENCES "user"("user_id");
ALTER TABLE "post_list" ADD CONSTRAINT "post_list_fk1" FOREIGN KEY ("user_id") REFERENCES "user"("user_id");

ALTER TABLE "photos" ADD CONSTRAINT "photos_fk0" FOREIGN KEY ("photos_id") REFERENCES "post_list"("post_id");
ALTER TABLE "photos" ADD CONSTRAINT "photos_fk1" FOREIGN KEY ("user_id") REFERENCES "user"("user_id");

ALTER TABLE "price" ADD CONSTRAINT "price_fk0" FOREIGN KEY ("price_id") REFERENCES "post_list"("post_id");
ALTER TABLE "price" ADD CONSTRAINT "price_fk1" FOREIGN KEY ("user_id") REFERENCES "user"("user_id");

ALTER TABLE "platform" ADD CONSTRAINT "platform_fk0" FOREIGN KEY ("platform_id") REFERENCES "post_list"("post_id");
ALTER TABLE "platform" ADD CONSTRAINT "platform_fk1" FOREIGN KEY ("user_id") REFERENCES "user"("user_id");






