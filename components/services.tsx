import { getTranslations } from "next-intl/server";

function Card({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-line bg-white p-6 shadow-[0_8px_30px_rgba(18,38,63,0.04)]">
      <div className="mb-4 h-1.5 w-10 rounded-full bg-teal" />
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </article>
  );
}

export async function Services() {
  const t = await getTranslations("services");

  const groups = [
    {
      title: t("groups.training.title"),
      items: [
        {
          title: t("groups.training.items.ai.title"),
          body: t("groups.training.items.ai.body"),
        },
        {
          title: t("groups.training.items.se.title"),
          body: t("groups.training.items.se.body"),
        },
        {
          title: t("groups.training.items.pm.title"),
          body: t("groups.training.items.pm.body"),
        },
      ],
    },
    {
      title: t("groups.consulting.title"),
      items: [
        {
          title: t("groups.consulting.items.ai.title"),
          body: t("groups.consulting.items.ai.body"),
        },
        {
          title: t("groups.consulting.items.se.title"),
          body: t("groups.consulting.items.se.body"),
        },
      ],
    },
    {
      title: t("groups.software.title"),
      items: [
        {
          title: t("groups.software.items.custom.title"),
          body: t("groups.software.items.custom.body"),
        },
      ],
    },
  ];

  return (
    <section id="servicos" className="bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-semibold tracking-[0.22em] text-teal-dark">
          {t("eyebrow")}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-navy">
          {t("title")}
        </h2>
        <div className="mt-12 space-y-12">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-navy">
                {group.title}
              </h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <Card key={item.title} title={item.title} body={item.body} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
