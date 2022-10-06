
/**
 * @desc 981. Time Based Key-Value Store
 */
import java.util.HashMap;
import java.util.TreeSet;
import java.util.Comparator;

class ValTS {
  public String val;
  Integer ts;

  public ValTS(String value, int timestamp) {
    this.val = value;
    this.ts = timestamp;
  }

}

class TimeMap {

  private HashMap<String, TreeSet<ValTS>> valTSMap;

  public TimeMap() {
    valTSMap = new HashMap<String, TreeSet<ValTS>>();
  }

  public void set(String key, String value, int timestamp) {
    TreeSet<ValTS> tsSet = valTSMap.get(key);
    Comparator<ValTS> compTS = (ValTS o1, ValTS o2) -> o1.ts.compareTo(o2.ts);
    if (tsSet == null) {
      tsSet = new TreeSet<ValTS>(compTS);
      tsSet.add(new ValTS(value, timestamp));
      valTSMap.put(key, tsSet);
    } else {
      tsSet.add(new ValTS(value, timestamp));
    }
  }

  public String get(String key, int timestamp) {
    TreeSet<ValTS> tsSet = valTSMap.get(key);
    if (tsSet == null)
      return "";
    ValTS res = tsSet.floor(new ValTS("", timestamp));
    return res == null ? "" : res.val;
  }
}
