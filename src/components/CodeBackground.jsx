const javaCode = `import java.util.List;
import java.util.stream.Collectors;

public class Portfolio {
    private final String language = "Java";

    public List<String> buildIdeas(List<String> ideas) {
        return ideas.stream()
            .filter(idea -> !idea.isBlank())
            .map(String::trim)
            .collect(Collectors.toList());
    }

    public static void main(String[] args) {
        var projects = List.of("Research", "Design", "Develop");
        projects.forEach(System.out::println);
    }
}`;

export default function CodeBackground() {
  return (
    <div className="code-background" aria-hidden="true">
      <div className="code-background-text">
        {[0, 1, 2].map((column) => (
          <pre key={column}>{Array(4).fill(javaCode).join("\n\n")}</pre>
        ))}
      </div>
    </div>
  );
}
