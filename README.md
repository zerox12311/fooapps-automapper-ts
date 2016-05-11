# fooapps-automapper-ts



### Modifications
```
diff --git a/original_automapper.d.ts b/modified_automapper.d.ts
index 87970e4..99f5d62 100644
--- a/original_automapper.d.ts
+++ b/modified_automapper.d.ts
@@ -3,7 +3,7 @@
 // Definitions by: Bert Loedeman <https://github.com/loedeman>
 // Definitions: https://github.com/borisyankov/DefinitelyTyped

-declare module AutoMapperJs {
+declare module 'automapper' {
     /**
      * AutoMapper implementation, for both creating maps and performing maps. Comparable usage and functionality to the original
      * .NET AutoMapper library is the pursuit of this implementation.
@@ -554,6 +554,6 @@ declare module AutoMapperJs {
         propertyArray: IProperty[];
         sourceMapping: boolean;
     }
-}
-
-declare var automapper: AutoMapperJs.AutoMapper;
\ No newline at end of file
+
+    export var automapper: AutoMapper;
+}
\ No newline at end of file
warning: LF will be replaced by CRLF in original_automapper.d.ts.
The file will have its original line endings in your working directory.
```


### To start:

    * npm install
    * npm start