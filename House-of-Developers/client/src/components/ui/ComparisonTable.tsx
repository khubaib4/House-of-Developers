import { CheckCircle2, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComparisonColumn {
  name: string;
  highlight?: boolean;
}

interface ComparisonRow {
  feature: string;
  description?: string;
  values: (boolean | string | number)[];
}

interface ComparisonTableProps {
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
}

export function ComparisonTable({ columns, rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border" data-testid="comparison-table">
      <table className="w-full">
        <thead>
          <tr className="bg-muted">
            <th className="text-left font-semibold p-4 min-w-[200px]">Feature</th>
            {columns.map((col, i) => (
              <th
                key={i}
                className={cn(
                  "text-center font-semibold p-4 min-w-[120px]",
                  col.highlight && "bg-primary/5"
                )}
              >
                {col.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-border last:border-b-0 hover-elevate"
            >
              <td className="p-4">
                <div className="font-medium">{row.feature}</div>
                {row.description && (
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {row.description}
                  </div>
                )}
              </td>
              {row.values.map((value, colIndex) => (
                <td
                  key={colIndex}
                  className={cn(
                    "p-4 text-center",
                    columns[colIndex]?.highlight && "bg-primary/5"
                  )}
                >
                  {typeof value === "boolean" ? (
                    value ? (
                      <CheckCircle2 className="h-5 w-5 text-accent mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />
                    )
                  ) : (
                    <span className="text-sm font-medium">{value}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
